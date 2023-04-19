import React, { useEffect, useState } from "react";
import { usernameState } from "atoms";
import { useRecoilValue } from "recoil";

export function useUsername() {
  return useRecoilValue(usernameState);
}
