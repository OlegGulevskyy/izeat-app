"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { api } from "~/trpc/react";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { toast } from "~/components/ui/use-toast";
import Image from "next/image";

const FormSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),

  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),

  picture: z.string(),
});

export function ProfileSettingsView() {
  const { data } = api.auth.getProfile.useQuery();
  const userData = data?.rawUserMetaData as { name: string; picture: string };
  const firstName = userData.name.split(" ")[0];
  const lastName = userData.name.split(" ")[1];

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: firstName ?? "",
      lastName: lastName ?? "",
      picture: userData.picture,
    },
  });

  function onSubmit(_: z.infer<typeof FormSchema>) {
    toast({
      title: "Success!",
      description: "Profile settings saved!",
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-6 p-4"
      >
        <FormField
          control={form.control}
          name="picture"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex flex-row items-center gap-4">
                  <Image
                    src={field.value}
                    alt="Profile picture"
                    width={400}
                    height={400}
                    className="h-24 w-24 rounded-2xl"
                  />
                  <div>
                    <Input id="picture" type="file" className="text-sm" />
                    <p className="mt-2 text-sm text-slate-600">
                      JPG or PNG. 1MB max.
                    </p>
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First name</FormLabel>
              <FormControl>
                <Input placeholder="John" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last name</FormLabel>
              <FormControl>
                <Input placeholder="Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          Save
        </Button>
      </form>
    </Form>
  );
}
