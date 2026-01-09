"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"

import { Button } from "./ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./ui/form"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

type ContactFormData = {
    name: string
    email: string
    message: string
}

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const form = useForm<ContactFormData>({
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true)
        try {
            const siteToken = import.meta.env.VITE_SITE_TOKEN

            const response = await fetch('/api/submit-contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-site-token': siteToken || ''
                },
                body: JSON.stringify({ ...data, source: 'Website Footer' }),
            })

            if (!response.ok) {
                throw new Error('Failed to submit form')
            }

            toast.success("Message sent successfully!")
            form.reset()
        } catch (error) {
            console.error(error)
            toast.error("Failed to send message. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="w-full max-w-md">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="name"
                        rules={{ required: "Name is required" }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-muted-foreground uppercase tracking-wider text-xs font-mono">Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Your name" {...field} className="bg-background/50" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        rules={{
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                            }
                        }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-muted-foreground uppercase tracking-wider text-xs font-mono">Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="name@example.com" type="email" {...field} className="bg-background/50" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        rules={{ required: "Message is required" }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-muted-foreground uppercase tracking-wider text-xs font-mono">Message</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="How can I help you?"
                                        className="min-h-[120px] bg-background/50"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            "Send Message"
                        )}
                    </Button>
                </form>
            </Form>
        </div>
    )
}
