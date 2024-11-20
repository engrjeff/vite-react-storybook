import { Button } from '@/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/ui/card';
import { ArrowRight, CheckIcon, XIcon } from 'lucide-react';

type AccessToMyBusinessProps = {
  variation: 'access-to-my-business';
  title: string;
  description: string;
  onInfoClick: () => void;
  onEditClick: () => void;
  onDelete: () => void;
};

type WhoHasAccessProps = {
  variation: 'who-we-have-access-to';
  title: string;
  description: string;
  onInfoClick: () => void;
};
type IncomingRequestProps = {
  variation: 'incoming-access-request';
  title: string;
  description: string;
  onDetailsClick: () => void;
  onDeclineClick: () => void;
  onApproveClick: () => void;

  requestDate: string;
};

type AccessPermissionProps = {
  variation: 'access-and-permission';
  title: string;
  description: string;
  onInfoClick: () => void;
  onEditClick: () => void;
  onDelete: () => void;
};

type AccessCardProps =
  | AccessToMyBusinessProps
  | WhoHasAccessProps
  | IncomingRequestProps
  | AccessPermissionProps;

export function AccessCard({
  title,
  description,
  children,
  ...props
}: React.PropsWithChildren<AccessCardProps>) {
  if (props.variation === 'access-to-my-business')
    return (
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter>
          <Button onClick={props.onInfoClick}>View</Button>
          <Button onClick={props.onEditClick}>Edit</Button>
          <Button onClick={props.onDelete}>Delete</Button>
        </CardFooter>
      </Card>
    );

  if (props.variation === 'who-we-have-access-to')
    return (
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter>
          <Button onClick={props.onInfoClick}>Info</Button>
        </CardFooter>
      </Card>
    );

  if (props.variation === 'incoming-access-request')
    return (
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-3 text-sm">
            <p className="font-semibold">Request Date</p>
            <p className="text-gray-400">{props.requestDate}</p>
          </div>
          {children}
        </CardContent>
        <CardFooter>
          <Button onClick={props.onDetailsClick}>
            <ArrowRight className="size-4" /> Details
          </Button>
          <Button onClick={props.onDeclineClick}>
            <XIcon className="size-4" />
            Decline
          </Button>
          <Button onClick={props.onApproveClick}>
            <CheckIcon className="size-4" /> Approve
          </Button>
        </CardFooter>
      </Card>
    );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="rounded-full shrink-0 size-7 flex items-center justify-center text-xs font-medium bg-purple-100 text-purple-500 capitalize p-0.5">
            {title.substring(0, 2)}
          </div>{' '}
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <Button onClick={props.onInfoClick}>View</Button>
        <Button onClick={props.onEditClick}>Edit</Button>
        <Button onClick={props.onDelete}>Delete</Button>
      </CardFooter>
    </Card>
  );
}
