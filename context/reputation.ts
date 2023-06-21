import { getReputationFx } from "@/api/reputation";
import { IReputation } from "@/types/reputation";
import { createDomain, sample } from "effector";
import { createGate } from "effector-react";

const reputation = createDomain()

export const $reputations = reputation.createStore<IReputation[]>([])
.on(getReputationFx.done, (_, { result }) => result)
.on(getReputationFx.fail, (_, { error }) => {
    console.log(error.message)
})

export const ReputationGate = createGate()

sample({
    clock: ReputationGate.open,
    target: getReputationFx
})