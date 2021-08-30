### WhiteSource Log Repository

#### This repository contains your WhiteSource scanner log files for manual scans.

---
In order to trigger the manual scans, a file called **scan.json** needs to be pushed to the whitesource-config repo. The **scan.json** file contains a list of repositories to scan:
```
{
  "repositories": [
    {
      "fullName": "orgName1/repoName1",
      "branchName": "main"
    }
  ]
}
```
<br><br>
**NOTE:**
* The repository list is limited to 10. If there are more than 10, no repositories will be scanned, and a check run saying so will be created.

* If a branch name is not specified - the default branch will be scanned.

* For each repository in the list, a scan will be triggered (in the latest commit of the specified branch), including the creation of the security check run.
