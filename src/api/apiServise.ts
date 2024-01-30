import axios from 'axios'

export const apiServise = async () => {
    const resp = await axios.get(
        `https://api.thecatapi.com/v1/images/search?limit=30`,
        {
            headers: {
                'Content-type': 'application/json',
                'x-api-key':
                    'live_WdyzmbhORxViQyhgTPWsk7NuXCejX5SePruJiIEEvWmVO69a285FUcEFsbd3GcMz',
            },
        }
    )

    return resp
}
