import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import useOrderEvents from "@/hooks/useOrderEvents";

export default function OrderEvents() {

const {order, suborder, handleOrderChange, handleSuborderChange} = useOrderEvents()

  return (
    <aside className="flex flex-row justify-center items-center sm:items-start sm:flex-col">
    <RadioGroup
      value={order}
      className="sm:h-32 pr-5 flex flex-col sm:border-b mb-5 border-sky-100"
      onValueChange={handleOrderChange}
    >
      <p>Order events by...</p>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value="name"
          id="name"
        />
        <Label htmlFor="name">Name</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value="description"
          id="description"
        />
        <Label htmlFor="description">Description</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value="validityDate"
          id="validityDate"
        />
        <Label htmlFor="validityDate">Date</Label>
      </div>
    </RadioGroup>
    <RadioGroup
      value={suborder}
      className="sm:h-40 pr-5 flex flex-col"
      onValueChange={handleSuborderChange}
    >
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value="asc"
          id="asc"
        />
        <Label htmlFor="asc">Asc</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value='desc'
          id="desc"
        />
        <Label htmlFor="desc">Desc</Label>
      </div>
    </RadioGroup>
    </aside>
  );
}
