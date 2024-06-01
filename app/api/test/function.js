import { NextResponse } from "next/server"
export const SendJson = (json, status) => NextResponse.json(json, { status })
