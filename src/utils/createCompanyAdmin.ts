import { extractCompany } from "../DATABASE/COMPANIES/extractCompanyFunc";
import { hashPassword } from "./encryptPassword";
import { getCompanyPool } from "../DATABASE/connectionManager";

export async function createCompanyAdmin(company:string, email: string, password:string){
    try{
const companyData = await extractCompany(company);
if (!companyData) {
    throw new Error("Company not found");
  }
  const companyId = companyData.rows[0].id;
  const dbName = `company_${companyId.replace(/-/g, '_')}`;
  console.log(dbName)
    const companyPool = getCompanyPool(dbName);
    const encryptedPassword = await hashPassword(password);
    await companyPool.query(
        `INSERT INTO users (email, company_id, password, role) VALUES ($1, $2, $3, $4)`,
        [email, companyData.rows[0].id, encryptedPassword, 'admin']
    );
    
}
catch (error) {
    throw new Error(`Error creating admin:` + error);
}
};