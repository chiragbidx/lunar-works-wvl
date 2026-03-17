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
import { Trash2, Edit, Plus, Users } from "lucide-react";

// This is a demo UI for contact list management.
type ContactList = {
  id: string;
  name: string;
  createdAt: string;
};

type ClientProps = {
  canManage: boolean;
  contactLists: ContactList[];
};

export default function Client({ canManage, contactLists }: ClientProps) {
  const [showDialog, setShowDialog] = useState(false);

  const [contactListsState, setContactListsState] = useState<ContactList[]>(contactLists);

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <header>
          <h1 className="text-2xl font-semibold tracking-tight">Contact Lists</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Import, organize, and segment your audience for targeted campaigns.
          </p>
        </header>
        {canManage && (
          <Dialog open={showDialog} onOpenChange={setShowDialog}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 size-4" />
                New List
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>New Contact List</DialogTitle>
              </DialogHeader>
              <form
                className="space-y-4"
                // Wire up to contact list create server action
                // action={createContactListAction}
              >
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input name="name" placeholder="Newsletter Subscribers" required />
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" variant="outline">
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button type="submit">Create List</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        )}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Lists</CardTitle>
          <CardDescription>
            Manage all your subscriber lists here.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>List Name</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contactListsState.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={3} className="text-center text-muted-foreground">
                    No lists yet. Click "New List" to start growing your audience.
                  </TableCell>
                </TableRow>
              ) : (
                contactListsState.map((list) => (
                  <TableRow key={list.id}>
                    <TableCell className="font-medium">{list.name}</TableCell>
                    <TableCell>{new Date(list.createdAt).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon" title="Edit" disabled>
                          <Edit className="size-4" />
                        </Button>
                        <Button variant="ghost" size="icon" title="Delete" disabled>
                          <Trash2 className="size-4" />
                        </Button>
                        <Button variant="ghost" size="icon" title="Manage Contacts" disabled>
                          <Users className="size-4" />
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