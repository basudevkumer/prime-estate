import {
  Button,
} from "@/components/ui";

export default function HomePage() {
  return (
    <main className="p-10 flex gap-4 flex-wrap">

      <Button>
        Primary
      </Button>

      <Button
        variant="secondary"
      >
        Secondary
      </Button>

      <Button
        variant="ghost"
      >
        Ghost
      </Button>

      <Button
        variant="gradient"
      >
        Gradient
      </Button>

      <Button loading>
        Submit
      </Button>

    </main>
  );
}