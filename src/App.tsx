import { CheckIcon, EyeIcon, PencilIcon, TrashIcon } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

export function App() {
  return (
    <div className="p-6 space-y-6 max-w-sm">
      <BusinessCard />
      <AccessAndPermissionCard />
    </div>
  );
}

function AccessAndPermissionCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex gap-3">
          <div className="p-1.5 bg-purple-400/20 text-purple-500 rounded-full text-xs inline-flex items-center justify-center">
            KK
          </div>
          <CardTitle>Kelly Kapoor</CardTitle>
        </div>
        <CardDescription>Orchard Activities</CardDescription>
      </CardHeader>
      <CardContent>pills here</CardContent>
      <CardFooter className="border-t p-0 divide-x">
        <button className="flex-1 h-[72px] text-sm flex items-center justify-center gap-2">
          <EyeIcon className="size-4" />
          Info
        </button>
        <button className="flex-1 h-[72px] text-sm flex items-center justify-center gap-2">
          <PencilIcon className="size-4" />
          Edit
        </button>
        <button className="flex-1 h-[72px] text-sm flex items-center justify-center gap-2">
          <TrashIcon className="size-4" />
          Delete
        </button>
      </CardFooter>
    </Card>
  );
}

function BusinessCard() {
  const [selected, setSelected] = useState(false);

  return (
    <Card
      data-selected={selected}
      className="data-[selected=true]:border-green-600 group"
    >
      <CardHeader>
        <CardTitle>Creed Contracting</CardTitle>
        <CardDescription>KPIN & Orchard Activities</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-sm gap-2">
          <p className="font-medium">Request date</p>
          <p className="text-sm text-gray-500">20/02/2024</p>
        </div>
        others here
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => setSelected((old) => !old)}
          className="group-data-[selected=true]:border-green-500 text-green-500"
          // className={selected ? 'border-green-500 text-green-500' : ''}
        >
          {selected ? null : <CheckIcon className="size-4 mr-2" />} Select
        </Button>
      </CardFooter>
    </Card>
  );
}
