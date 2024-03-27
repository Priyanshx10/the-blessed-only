import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <div className="w-full px-4 py-8 space-y-4 md:px-6 border">
      <div className="container flex flex-col items-center justify-center space-y-2">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contact Us</h1>
          <p className="text-black dark:text-black">
            Send us a message and we will get back to you.
          </p>
        </div>
        <div className="w-full max-w-sm space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" className="text-white" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Enter your email" type="email" className="text-white" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea className="min-h-[150px] text-white" id="message" placeholder="Enter your message" />
          </div>
          <Button className="border">Send message</Button>
        </div>
      </div>
    </div>
  )
}
