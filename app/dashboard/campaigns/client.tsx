"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Trash2, Edit, Plus } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

// This is a demo UI for campaign management. Wire up server actions as needed.
type Campaign = {
  id: string;
  name: string;
  status: string;
  subject: string;
  scheduledAt: string | null;
  sentAt: string | null;
  createdAt: string;
  templateName?: string | null;
  listName?: string | null;
};

type Template = { id: string; name: string };
type ContactList = { id: string; name: string };

type ClientProps = {
  canManage: boolean;
  campaigns: Campaign[];
  templates: Template[];
  contactLists: ContactList[];
};

export default function Client({
  canManage,
  campaigns,
  templates,
  contactLists,
}: ClientProps) {
  const [showDialog, setShowDialog] = useState(false);

  // This state is for demo UX; in production, loading/error states come from server actions.
  const [campaignsState, setCampaignsState] = useState<Campaign[]>(campaigns);

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <header>
          <h1 className="text-2xl font-semibold tracking-tight">Campaigns</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage, schedule, or track email campaigns for your audience.
          </p>
        </header>
        {canManage && (
          <Dialog open={showDialog} onOpenChange={setShowDialog}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 size-4" />
                New Campaign
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>New Campaign</DialogTitle>
              </DialogHeader>
              <form
                className="space-y-4"
                // Wire up to campaign create server action
                // action={createCampaignAction}
              >
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input name="name" placeholder="Spring Sale Launch" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input name="subject" placeholder="Your exclusive offer…" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Template</label>
                  <select name="emailTemplateId" className="input" required>
                    <option value="">Select a template</option>
                    {templates.map((tpl) => (
                      <option key={tpl.id} value={tpl.id}>
                        {tpl.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Recipients List</label>
                  <select name="contactListId" className="input" required>
                    <option value="">Select a contact list</option>
                    {contactLists.map((list) => (
                      <option key={list.id} value={list.id}>
                        {list.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Scheduled At</label>
                  <Input
                    type="datetime-local"
                    name="scheduledAt"
                    placeholder="2026-01-01T10:00"
                  />
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" variant="outline">
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button type="submit">Create Campaign</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        )}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Campaigns</CardTitle>
          <CardDescription>
            All email marketing campaigns for your organization.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Campaign Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Template</TableHead>
                <TableHead>Recipients</TableHead>
                <TableHead>Scheduled</TableHead>
                <TableHead>Sent</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {campaignsState.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="text-center text-muted-foreground">
                    No campaigns yet. Click "New Campaign" to get started.
                  </TableCell>
                </TableRow>
              ) : (
                campaignsState.map((camp) => (
                  <TableRow key={camp.id}>
                    <TableCell className="font-medium">{camp.name}</TableCell>
                    <TableCell>{camp.status}</TableCell>
                    <TableCell>{camp.subject}</TableCell>
                    <TableCell>{camp.templateName ?? "--"}</TableCell>
                    <TableCell>{camp.listName ?? "--"}</TableCell>
                    <TableCell>{camp.scheduledAt ? new Date(camp.scheduledAt).toLocaleString() : "--"}</TableCell>
                    <TableCell>{camp.sentAt ? new Date(camp.sentAt).toLocaleString() : "--"}</TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon" title="Edit" disabled>
                          <Edit className="size-4" />
                        </Button>
                        <Button variant="ghost" size="icon" title="Delete" disabled>
                          <Trash2 className="size-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  );
}