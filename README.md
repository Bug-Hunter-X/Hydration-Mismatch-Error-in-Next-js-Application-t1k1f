# Next.js Hydration Mismatch Bug

This repository demonstrates a common hydration mismatch error in Next.js applications and its solution.

## Problem

A hydration mismatch error occurs when the server-side rendered HTML and the client-side JavaScript differ.  This leads to a blank page or unexpected behavior during the initial load. In this case, a simple Next.js app fails to render correctly, and the browser console shows a hydration mismatch error.

## Solution

The provided solution uses `useLayoutEffect` instead of `useEffect` within a functional component to ensure that DOM mutations only happen after the layout has been completed, resolving the hydration mismatch.