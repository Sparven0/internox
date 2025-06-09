
import { getCompanyPool } from "../connectionManager";

export async function getAllUsers(companyId:string):Promise<any> {
    const dbName = `company_${companyId.replace(/-/g, '_')}`;
const companyPool = getCompanyPool(dbName);
    try {
        const result = await companyPool.query(
            `SELECT id, email, role, created_at FROM users`
        );
        return result.rows;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}