
*** permission needed: companyAdmin ***
/new-user  
{email, companyDomain, password} 


### Serious logic issues when creating users. Admins for all companies can create users for all companies 
### just by inserting another domain. Needs validation in insertUserFunc.ts

*** permission needed: superAdmin ***
/onboarding 
{name, domain}

*** permission needed: companyAdmin ***
/new-credentials
{companyName, tokens}
tokens:{
  service:
  access_token:
  refresh_token:
  expires_at:
}

*** permission needed: companyAdmin ***
/new-imap-credentials
{company:
user:
imapHost:
imapPort:
emailAddress:
plainPassword:
}

*** permission needed: none ***
/login
{
  email:
  password:
  companyDomain:
}


*** permission needed: developer ***
/create-admin
{
  userName:
  password:
}


*** permission needed: superAdmin ***
/create-company-admin
{
  company:
  email:
  password:
}






## Creating super_admin ##
run: ts-node src/utils/generateToken.ts
copy the token from the console
insert the token as bearer in postman
use the "create-admin" endpoint





** update **

Nu fungerar den endpointen för att hämta data från fortnox efter att man gjort OAuth flödet, ska kolla så att det bara går när man är inloggad på rätt företag.

http://localhost:1222/fortnox-data?companyId=<companyId>&endpoint=/<endpoint>

*/LÅT OSS FIXA SWAGGER MANNINNNNNNN*


## Fortnox Autt ##
http://localhost:1222/auth?token=<JWT from login>

Måste logga in och hämta token för där storas companyName