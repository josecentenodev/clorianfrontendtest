import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import useOrderEvents from "@/hooks/useOrderEvents";

export default function OrderEvents() {

const {order, suborder, handleOrderChange, handleSuborderChange} = useOrderEvents()

  return (
    <div>
    <RadioGroup
      value={order}
      className="h-40 px-5 flex flex-col"
      onValueChange={handleOrderChange}
    >
      <p>Order events by...</p>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value="name"
          id="r1"
        />
        <Label htmlFor="r1">Name</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value="description"
          id="r2"
        />
        <Label htmlFor="r2">Description</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value="validityDate"
          id="r3"
        />
        <Label htmlFor="r3">Date</Label>
      </div>
    </RadioGroup>
    <RadioGroup
      value={suborder}
      className="h-40 px-5 flex flex-col"
      onValueChange={handleSuborderChange}
    >
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value="asc"
          id="r1"
        />
        <Label htmlFor="r1">Asc</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value='desc'
          id="r2"
        />
        <Label htmlFor="r2">Desc</Label>
      </div>
    </RadioGroup>
    </div>
  );
}
