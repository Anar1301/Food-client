import { MinusIcon, PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export function ButtonGroupOrientation({ index }: { index: number }) {
  return (
    <ButtonGroup aria-label="Media controls" className="h-fit gap-2">
      <Button variant="outline" size="icon">
        <MinusIcon />
      </Button>
      <Button className="rounded-full">{index}</Button>
      <Button variant="outline" size="icon">
        <PlusIcon />
      </Button>
    </ButtonGroup>
  );
}
