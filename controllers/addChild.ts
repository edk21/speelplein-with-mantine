interface ChildType {
  childName: string,
  childFamilieName: string,
  childDateOfBirth: string,
  childSchool: string,
  childLevel: string,
  childGender: string,
  childSSN: string,
  childPassport?: string,
  childAllergies?: string,
  streetNHouse: string,
  postalCodeNCity: string,
  parentName1: string,
  parentFamilieName1: string,
  parentTel1: string,
  parentEmail1: string,
  parentSSN1: string,
  parentName2?: string,
  parentFamilieName2?: string,
  parentTel2?: string,
  parentEmail2?: string,
  parentSSN2?: string,
  medicals?: string,
  parentRemarks?: string,
  teamRemarks?: string,
  week1?: string,
  week2?: string,
  week3?: string,
  week4?: string,
  presence?: string,
  balance?: number,
  social?: string,
  totalAmount: number,
}

interface JsonResponse {
  type: string;
  data: any;
}

async function fetchJson(url: string, options: RequestInit): Promise<JsonResponse> {
  const response = await fetch(url, options);
  if (response.ok) {
    return {
      type: 'json',
      data: await response.json(),
    };
  }
    throw new Error(`HTTP error: ${response.status}`);
}

export default async function addNewChild(newChild: ChildType) {
  console.log('newChild: ', newChild);
  try {
    const res = await fetchJson('http://localhost:3000/api/children', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newChild),
    });

    if (res.type !== 'json') {
      throw new Error(`Invalid response type: ${res.type}`); // Handle non-JSON responses
    }

    return res.data;
  } catch (error) {
    console.log('Error: ', error);
    throw new Error('Failed to post');
  }
}
