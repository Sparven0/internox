*** Endpoints ***


***  onboarding companies ***
/onboarding 
(name, domain)

*** extracting companies *** 
/company?name=
(the company name)


*** new tokens ***
/new-credentials


{
    service: "Google",
  access_token: "exampleAccessToken",
  refresh_token: "exampleRefreshToken",
  expires_at: "2023-12-31T23:59:59"
}


*** new users *** 

/new-user
{email: "email",
companyDomain: "cdomain",
password: "password"} 

!Domain och email domain måste matcha!



*** extract user *** 
/users 

req.query = users?company=COMPANY_NAME&email=USER_EMAIL

