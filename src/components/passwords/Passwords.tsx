import React from "react";
import { AddPasswordsForm } from "@/components/passwords/AddPasswordsForm";
import PasswordList from "@/components/passwords/PasswordList";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

function Passwords() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Add Password</CardTitle>
          <CardDescription>Type and save your password</CardDescription>
        </CardHeader>
        <CardContent>
          <AddPasswordsForm />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Password List</CardTitle>
          <CardDescription>Manage your passwords</CardDescription>
        </CardHeader>
        <CardContent>
          <PasswordList />
        </CardContent>
      </Card>
    </div>
  );
}

export default Passwords;
