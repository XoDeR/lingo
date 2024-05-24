import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
      <Button>Default</Button>
      <Button>Primary</Button>
      <Button>Primary Outline</Button>
    </div>
  );
}
