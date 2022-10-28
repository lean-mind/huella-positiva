import { BASE } from '../base';
import { ROUTE } from '../http/routes';
import { getCookie } from '../http/cookies';

export default class ConvocatoriesFetch {
  async getConvocatoriesPage(page: number, size: number) {
    const URL = `${BASE.API}${ROUTE.API.proposals.fetchListOfProposals(page, size)}`;
    return await fetch(URL, {
      method: 'GET',
      mode: 'cors',
      headers: {
        accept: '*/*',
      },
    }).then((response) => {
      if (response.status === 201 || response.status === 200) {
        return response.json();
      } else {
        return response.status;
      }
    });
  }

  /*async addNewConvocatory(convocatoryData: ConvocatoryDto) {
        const XSRF = getCookie('XSRF-TOKEN');
        const URL = `${BASE.API}${ROUTE.API.convocatories.register}`;
        return await fetch(URL, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'X-XSRF-TOKEN': `${XSRF}`,
                'Cookie': `XSRF-TOKEN=${XSRF}`,
                'Content-Type': 'multipart/form-data'
            },
            body: JSON.stringify(convocatoryData, )
        })
    }*/
}
