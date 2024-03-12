import useCart from "@/hooks/useCart";
import { isBefore, parseISO } from "date-fns";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface Event {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  altImg: string;
  validityDate: string;
  cost: number;
}

const EventCard = ({
  id,
  name,
  description,
  imageUrl,
  altImg,
  validityDate,
  cost,
}: Event) => {
  const { handleAddToCart, handleValueChange } = useCart(id, name);

  const [isDisabled, setIsDisabled] = useState(true);


  useEffect(() => {
    const currentDateISO = new Date().toISOString();
    const eventDateISO = new Date(validityDate).toISOString();
    setIsDisabled(isBefore(parseISO(eventDateISO), parseISO(currentDateISO)));
  }, []);

  return (
    <Card
      id={`${id}`}
      className="break-inside-avoid"
    >
      <CardHeader>
        <img
          src={imageUrl}
          alt={altImg}
          className="max-h-96"
        />
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-2xl text-cyan-950">€ {cost}</h3>
          <p className="text-sm font-semibold text-cyan-800">
            Date: {validityDate}
          </p>
          {isDisabled && <p className="text-xs text-rose-600">This event has already occurred</p>}
          <div>
            <Select
              onValueChange={handleValueChange}
              disabled={isDisabled}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select the amount" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={"1"}>1</SelectItem>
                <SelectItem value={"2"}>2</SelectItem>
                <SelectItem value={"3"}>3</SelectItem>
                <SelectItem value={"4"}>4</SelectItem>
                <SelectItem value={"5"}>5</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button
          onClick={handleAddToCart}
          disabled={isDisabled}
        >
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
