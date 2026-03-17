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

// Demo UI for email template management.
type Template = {
  id: string;
  name: string;
  subject: string;
  createdAt: string;
  updatedAt: string;
};

type ClientProps = {
  canManage: boolean;
  templates: Template[];
};

export default function Client({ canManage, templates }: ClientProps) {
  const [showDialog, setShowDialog] = useState(false);

  const [templatesState, setTemplatesState] = useState<Template[]>(templates);

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <header>
          <h1 className="text-2xl font-semibold tracking-tight">Templates</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Create and manage beautiful, reusable email templates.
          </p>
        </header>
        {canManage && (
          <Dialog open={showDialog} onOpenChange={setShowDialog}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 size-4" />
                New Template
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>New Email Template</DialogTitle>
              </DialogHeader>
              <form
                className="space-y-4"
                // Wire up to template create server action
                // action={createTemplateAction}
              >
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input name="name" placeholder="Fall Newsletter" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input name="subject" placeholder="Exciting news from the MailForge team" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">HTML Source</label>
                  <Textarea name="html" rows={6} placeholder="<h1>Hello, friend!</h1>" required />
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" variant="outline">
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button type="submit">Create Template</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        )}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Email Templates</CardTitle>
          <CardDescription>
            Templates let your team move fast and stay on-brand.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Template Name</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Updated</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {templatesState.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-muted-foreground">
                    No templates yet. Click "New Template" to get started.
                  </TableCell>
                </TableRow>
              ) : (
                templatesState.map((tpl) => (
                  <TableRow key={tpl.id}>
                    <TableCell className="font-medium">{tpl.name}</TableCell>
                    <TableCell>{tpl.subject}</TableCell>
                    <TableCell>{new Date(tpl.createdAt).toLocaleDateString()}</TableCell>
                    <TableCell>{new Date(tpl.updatedAt).toLocaleDateString()}</TableCell>
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