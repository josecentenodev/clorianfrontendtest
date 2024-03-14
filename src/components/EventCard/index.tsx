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
import { Product } from "@/types";

const EventCard = ({
  id,
  name,
  description,
  imageUrl,
  altImg,
  validityDate,
  cost,
}: Product) => {
  const { handleAddToCart, handleValueChange } = useCart(id, name);

  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const currentDateISO = new Date().toISOString();
    const eventDateISO = new Date(validityDate).toISOString();
    setIsDisabled(isBefore(parseISO(eventDateISO), parseISO(currentDateISO)));
  }, []);

  return (
    <Card id={`${id}`}>
      <CardHeader>
        <div className="h-64 w-64 mb-5 mx-auto flex-shrink-0 overflow-hidden rounded-md border border-gray-200 flex justify-center items-center">
          <img
            src={imageUrl}
            alt={altImg}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-2xl text-sky-950">€ {cost}</h3>
          <p className="text-sm font-semibold text-sky-800">
            Date: {validityDate}
          </p>
          {isDisabled && (
            <p className="text-xs text-rose-600">
              This event has already occurred
            </p>
          )}
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
