"use client";

import React from "react";
import { RecoilRoot } from "recoil";

type RecoilRootWrapperProps = {
  children: React.ReactNode;
};

function RecoilRootWrapper({ children }: RecoilRootWrapperProps) {
  return <RecoilRoot>{children}</RecoilRoot>;
}

export default RecoilRootWrapper;
