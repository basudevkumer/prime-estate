import {
  Input,
  Textarea,
  Button,
  FormField,
} from "@/components/ui";

export default function HomePage() {
  return (
    <main className="container-premium py-20">

      <div
        className="
        glass-card
        p-8
        max-w-xl
      "
      >
        <FormField
          label="Full Name"
        >
          <Input
            placeholder="John Doe"
          />
        </FormField>

        <FormField
          label="Email"
          className="mt-5"
        >
          <Input
            type="email"
            placeholder="john@example.com"
          />
        </FormField>

        <FormField
          label="Message"
          className="mt-5"
        >
          <Textarea
            placeholder="Write your message..."
          />
        </FormField>

        <Button
          className="mt-6"
        >
          Submit
        </Button>
      </div>

    </main>
  );
}