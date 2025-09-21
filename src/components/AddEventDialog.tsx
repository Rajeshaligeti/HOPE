import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

interface AddEventDialogProps {
  selectedDate: Date;
  onAddEvent: (event: {
    title: string;
    time: string;
    type: 'medication' | 'appointment' | 'reminder' | 'exercise';
    description: string;
  }) => void;
  trigger?: React.ReactNode;
}

export function AddEventDialog({ selectedDate, onAddEvent, trigger }: AddEventDialogProps) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [type, setType] = useState<'medication' | 'appointment' | 'reminder' | 'exercise'>('reminder');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddEvent({
      title,
      time,
      type,
      description,
    });
    setOpen(false);
    // Reset form
    setTitle('');
    setTime('');
    setType('reminder');
    setDescription('');
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Event</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Event Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter event title"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="time">Time</Label>
            <Input
              id="time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="type">Event Type</Label>
            <Select value={type} onValueChange={(value: 'medication' | 'appointment' | 'reminder' | 'exercise') => setType(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select event type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="medication">Medication</SelectItem>
                <SelectItem value="appointment">Appointment</SelectItem>
                <SelectItem value="reminder">Reminder</SelectItem>
                <SelectItem value="exercise">Exercise</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add description"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Add Event</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}