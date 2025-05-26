// Import all function that connect and extract data from BL, fortnox and IMAP (mail)
// handle the data with the functionality to scan for lost time
class CompanyData {
    constructor(public companyId: string, private readonly accessToken: string, private readonly refreshToken: string) {
      this.companyId = companyId;
      this.accessToken = accessToken;
      this.refreshToken = refreshToken;
    }
  
    getAccessToken() {
      return this.accessToken;
    }
    getRefreshToken() {
      return this.refreshToken;
    }
    getCompanyId() {
      return this.companyId;
    }
  }
  

  import initProcess from "./process";
  
  export async function getFortnoxTokens(): Promise<any> {
    const integrationsList:CompanyData[] = [] 
    const companies = await initProcess();
    for (const company of companies) {
      for (const integration of company.integrations) {
        const companyData = new CompanyData(
          integration.company_id,
          integration.access_token,
          integration.refresh_token || ''
        )
       integrationsList.push(companyData);
        
      }
     
    }
    return integrationsList
  }
