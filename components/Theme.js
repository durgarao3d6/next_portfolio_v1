"use client";
import { ThemeProvider } from "next-themes";
import React,{useState,useEffect} from "react";

const Theme = ({ children }) => {
  const [state, setState] = useState(false);
  useEffect(() => {
    setState(true);
  }, []);
  if (!state) {
    return null;
  }
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default Theme;
