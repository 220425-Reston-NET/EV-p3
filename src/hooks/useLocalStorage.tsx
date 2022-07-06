import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
    // this reposnsible to make our shopping cart persis => pass <T> between function name to make it generic
// useState logic
const [value, setValue] = useState<T> (() => {
    const jsonValue = localStorage.getItem(key)
if (jsonValue != null) return JSON.parse(jsonValue)

if( typeof initialValue === 'function'){
    return (initialValue as () => T)()
} else {
    return initialValue
}
})

useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
}, [key, value])

return [value, setValue] as [typeof value, typeof setValue]
}