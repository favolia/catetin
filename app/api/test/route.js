import { SendJson } from "./function"

export const GET = () => {

    return SendJson({ status: true }, 200)
}