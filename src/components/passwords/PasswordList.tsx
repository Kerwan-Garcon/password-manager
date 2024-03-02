"use client";

import { Password } from "@/types/password";
import usePasswordStore from "@/utils/store/usePasswordStore";
import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Eye, EyeOff, Pen, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";

function TodoList() {
  const [passwordValue, setPasswordValue] = useState("");

  const passwords: Password[] = usePasswordStore(
    (state) => state.passwords as Password[]
  );

  const updatePassword = usePasswordStore((state) => state.updatePassword);
  const removePassword = usePasswordStore((state) => state.removePassword);
  const focusPassword = usePasswordStore((state) => state.focusPassword);

  return (
    <div className="mt-8">
      {passwords.map((password) => (
        <div
          className={`flex mb-2 justify-between p-4 rounded-lg`}
          key={password.id}
        >
          <div className="w-full">
            <p className={`text-slate-600 font-bold text-xl`}>
              {password.name}
            </p>

            <div className="flex gap-2">
              <Input
                value={passwordValue != "" ? passwordValue : password.password}
                onChange={(e) => setPasswordValue(e.target.value)}
                className={`text-slate-400 font-light w-full tracking-wide`}
                type={password.focused ? "text" : "password"}
                disabled={!password.focused}
              />
              <div className="flex space-x-1">
                <div className="flex flex-row-reverse gap-4 my-auto">
                  <TooltipProvider>
                    {password.focused ? (
                      <>
                        <Tooltip>
                          <TooltipTrigger>
                            <Pen
                              size={16}
                              className="cursor-pointer"
                              onClick={() =>
                                updatePassword(password.id, passwordValue)
                              }
                            />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Update Password</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger>
                            <EyeOff
                              size={16}
                              className="cursor-pointer"
                              onClick={() => {
                                focusPassword(password.id);
                                setPasswordValue(password.password);
                              }}
                            />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Hide Password</p>
                          </TooltipContent>
                        </Tooltip>
                      </>
                    ) : (
                      <>
                        <Tooltip>
                          <TooltipTrigger>
                            <Trash2
                              size={16}
                              className="cursor-pointer"
                              onClick={() => removePassword(password.id)}
                            />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Delete Password</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger>
                            <Eye
                              size={16}
                              className="cursor-pointer"
                              onClick={() => {
                                focusPassword(password.id);
                              }}
                            />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Show Password</p>
                          </TooltipContent>
                        </Tooltip>
                      </>
                    )}
                  </TooltipProvider>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
