import type { Meta, StoryObj } from '@storybook/react';

import { AccessCard } from './access-card';

const meta: Meta<typeof AccessCard> = {
  component: AccessCard,
};

export default meta;

type Story = StoryObj<typeof AccessCard>;

export const AccessToMyBusinessCard: Story = {
  args: {
    variation: 'access-to-my-business',
    title: 'Creed Contracting',
    description: 'Something here',
    onInfoClick: () => {},
    onEditClick: () => {},
    onDelete: () => {},
  },
};

export const WhatBusinessCard: Story = {
  args: {
    variation: 'who-we-have-access-to',
    title: 'Creed Contracting',
    description: 'Something here',
    onInfoClick: () => {},
  },
};

export const AllCards: Story = {
  render: () => {
    const chips = [1, 2, 3, 4];
    const limit = 1;

    return (
      <div className="p-6 grid grid-cols-3 gap-6">
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
  },
};
// const AccessCards: StoryObj<typeof AccessCard> = {
//   render: () => {
//     const chips = [1, 2, 3, 4];
//     const limit = 1;

//     return (
//       <div className="grid grid-cols-2">
//         <AccessCard
//           variation="access-to-my-business"
//           title="Creed Contracting"
//           description="Something here"
//           onInfoClick={() => {}}
//           onEditClick={() => {}}
//           onDelete={() => {}}
//         >
//           <div>
//             <p className="text-xs text-gray-100">Compliance Access</p>
//             <div className="flex items-center gap-2">
//               {chips.slice(0, limit).map((chip) => (
//                 <div
//                   key={chip}
//                   className="rounded-full px-1.5 py-1 border border-gray-300 text-xs"
//                 >
//                   <span>Chip {chip}</span>
//                 </div>
//               ))}
//               <div className="rounded-full px-1.5 py-1 border border-gray-300 text-xs">
//                 <span>+ {chips.length - limit}</span>
//               </div>
//             </div>
//           </div>
//         </AccessCard>
//       </div>
//     );
//   },
// };
