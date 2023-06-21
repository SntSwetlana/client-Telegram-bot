import { createEffect } from 'effector'
import api from './axiosClient'

export const getReputationFx = createEffect(async () => {
    const { data } = await api.get('reputations')
    
    return data 
})