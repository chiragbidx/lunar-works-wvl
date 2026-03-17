"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type AnalyticsRow = {
  id: string;
  campaignId: string;
  opens: number;
  clicks: number;
  bounces: number;
  unsubscribes: number;
  updatedAt: string | null;
  createdAt: string;
};

type ClientProps = {
  analytics: AnalyticsRow[];
};

export default function Client({ analytics }: ClientProps) {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Analytics</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          See in-depth marketing performance across all campaigns.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Campaign Performance</CardTitle>
          <CardDescription>
            Track open, click-through, bounce, and unsubscribe rates.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Campaign</TableHead>
                <TableHead>Opens</TableHead>
                <TableHead>Clicks</TableHead>
                <TableHead>Bounces</TableHead>
                <TableHead>Unsubscribes</TableHead>
                <TableHead>Last Updated</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {analytics.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center text-muted-foreground">
                    No analytics data yet. Launch a campaign to see results.
                  </TableCell>
                </TableRow>
              ) : (
                analytics.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.campaignId}</TableCell>
                    <TableCell>{row.opens}</TableCell>
                    <TableCell>{row.clicks}</TableCell>
                    <TableCell>{row.bounces}</TableCell>
                    <TableCell>{row.unsubscribes}</TableCell>
                    <TableCell>
                      {row.updatedAt
                        ? new Date(row.updatedAt).toLocaleString()
                        : "--"}
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