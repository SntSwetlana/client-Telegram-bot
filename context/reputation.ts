import { getReputationFx } from "@/api/reputation";
import { IReputation } from "@/types/reputation";
import { createDomain } from "effector";

const reputation = createDomain()

export const $reputations = reputation.createStore<IReputation[]>([])
.on(getReputationFx.done, (_, { result }) => result)