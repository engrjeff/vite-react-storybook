import { AccessCard } from './components/AccessCard';

export function App() {
  const chips = [1, 2, 3, 4];
  const limit = 1;

  return (
    <div className="p-6 grid grid-cols-4 gap-6">
      <AccessCard
        variation="access-to-my-business"
        title="Creed Contracting"
        description="Something here"
        onInfoClick={() => {}}
        onEditClick={() => {}}
        onDelete={() => {}}
      >
        <div>
          <p className="text-xs text-gray-100">Compliance Access</p>
          <div className="flex items-center gap-2">
            {chips.slice(0, limit).map((chip) => (
              <div
                key={chip}
                className="rounded-full px-1.5 py-1 border border-gray-300 text-xs"
              >
                <span>Chip {chip}</span>
              </div>
            ))}
            <div className="rounded-full px-1.5 py-1 border border-gray-300 text-xs">
              <span>+ {chips.length - limit}</span>
            </div>
          </div>
        </div>
      </AccessCard>
      <AccessCard
        variation="who-we-have-access-to"
        title="KPIN & Orchard Activities"
        description="Something here"
        onInfoClick={() => {}}
      />
      <AccessCard
        variation="incoming-access-request"
        title="Michael's Fertilizers"
        description="Something here"
        requestDate="10/02/2024"
        onDetailsClick={() => {}}
        onDeclineClick={() => {}}
        onApproveClick={() => {}}
      />
      <AccessCard
        variation="access-and-permission"
        title="Kelly Kapoor"
        description="Something here"
        onInfoClick={() => {}}
        onEditClick={() => {}}
        onDelete={() => {}}
      />
    </div>
  );
}

// function AccessAndPermissionCard() {
//   return (
//     <Card>
//       <CardHeader>
//         <div className="flex gap-3">
//           <div className="p-1.5 bg-purple-400/20 text-purple-500 rounded-full text-xs inline-flex items-center justify-center">
//             KK
//           </div>
//           <CardTitle>Kelly Kapoor</CardTitle>
//         </div>
//         <CardDescription>Orchard Activities</CardDescription>
//       </CardHeader>
//       <CardContent>pills here</CardContent>
//       <CardFooter className="border-t p-0 divide-x">
//         <button className="flex-1 h-[72px] text-sm flex items-center justify-center gap-2">
//           <EyeIcon className="size-4" />
//           Info
//         </button>
//         <button className="flex-1 h-[72px] text-sm flex items-center justify-center gap-2">
//           <PencilIcon className="size-4" />
//           Edit
//         </button>
//         <button className="flex-1 h-[72px] text-sm flex items-center justify-center gap-2">
//           <TrashIcon className="size-4" />
//           Delete
//         </button>
//       </CardFooter>
//     </Card>
//   );
// }

// function BusinessCard() {
//   const [selected, setSelected] = useState(false);

//   return (
//     <Card
//       data-selected={selected}
//       className="data-[selected=true]:border-green-600 group"
//     >
//       <CardHeader>
//         <CardTitle>Creed Contracting</CardTitle>
//         <CardDescription>KPIN & Orchard Activities</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <div className="flex items-center text-sm gap-2">
//           <p className="font-medium">Request date</p>
//           <p className="text-sm text-gray-500">20/02/2024</p>
//         </div>
//         others here
//       </CardContent>
//       <CardFooter>
//         <Button
//           onClick={() => setSelected((old) => !old)}
//           className="group-data-[selected=true]:border-green-500 text-green-500"
//           // className={selected ? 'border-green-500 text-green-500' : ''}
//         >
//           {selected ? null : <CheckIcon className="size-4 mr-2" />} Select
//         </Button>
//       </CardFooter>
//     </Card>
//   );
// }
