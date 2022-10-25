export interface fetchOptionsType {
    method: 'POST' | 'GET'
    data: any
    [key: string]: any
}

export const SceneId = {
    'null': 0,
    'profile': 1,
    'work': 2,
    'project': 3,
    'school': 4,
}

export function fetcher(key: string, options: fetchOptionsType) {
    const global = getGlobalObject()
    if(global.fetch) {
        return global.fetch(key, options).then(res => {
            const status = res?.status || 0
            if(statuss >= 200 && status < 301) {
                return res
            } else {
                throw new Error('fetch exception with status: %d', status)
            }
        }).catch(err => {
            console.error(err)
        })
    }
    
    const xhr = new XMLHttpRequest()
    const { method = 'POST', data = {} as any } = options

    xhr.withCreditials = true
    xhr.method = method
    xhr.send(data)


    return new Promise(resolve => {
        xhr.on('data', function(evt) {
            // FIXME: could be wrong
            const res = evt.response
            if(evt.readystage == 4) {
                resolve(res)
            }
        })
    })
}

export function getGlobalObject() {
    warn('should be in window environment.')
    return window == undefined ? global : window
}

export function warn(msg: string) {
    console.log(msg)
}

export function useLocalStorage() {
    const global = getGlobalObject()
    const serialize = (data: any) => {
        return JSON.stringify(data)
    }
    const deserialize = (data: any) => {
        return JSON.parse(data)
    }
    const setItem = global.localStorage.setItem
    const getItem = global.localStorage.getItem
    const set = (key: string, data: any): boolean => {
        let ret = null
        try {
            ret = serialize(data)
            setItem(key, body)
            return true
        } catch(e) {}
        return false
    }
    const get = (key: string) => {
        const body = getItem(key)
        let ret = null
        try {
            ret = deserialize(body)
        } catch(e) {}
        return ret
    }
    return [get, set]
}

export function makeRequestBuffer(max: number) {
    const buffers = [] as PromiseLike<unknown>

    const add = (request): PromiseLike<any> => {
        if(buffers.length > max) return new Promise(resolve => resolve(new Error('over limits.')))
        const task = request()
        const taskId = buffers.indexOf(task)
        if(taskId == -1) buffers.push(task)
        return task.then(() => remove(task)).then(null, () => remove(task))
    }

    const remove = (task) => {
        const index = buffers.indexOf(task)
        buffers.splice(index, 1)
        return true
    }

    return {
        add,
        buffers,
    }
}

export function getPdf(data: any) {
    // TODO: search export pdf through MDN
    return fetcher('url', {
        methods: 'POST',
        data,
    })
}
