import {DataInState} from 'src/modules/apiTest/apiTestModule';

export const CheckName = (name: string):DataInState  => {
  const flg = (name === 'Japan')
  return {data: name, redF: flg}
}

export const CheckFlag = (flag: string):DataInState  => {
  const flg = (flag === 'https://restcountries.eu/data/btn.svg')
  return {data: flag, redF: flg}
}

export const CheckAlpha2Code = (code: string):DataInState  => {
  const flg = (code === 'https://restcountries.eu/data/btn.svg')
  return {data: code, redF: flg}
}

export const CheckCapital = (capital: string):DataInState  => {
  const flg = false
  return {data: capital, redF: flg}
}

export const CheckDemonym = (demonym: string):DataInState  => {
  const flg = false
  return {data: demonym, redF: flg}
}

export const CheckRegion = (region: string):DataInState  => {
  const flg = false
  return {data: region, redF: flg}
}

export const CheckSubRegion = (subregion: string):DataInState  => {
    const flg = false
    return {data: subregion, redF: flg}
}

