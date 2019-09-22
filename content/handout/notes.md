# Slides for the workshop:

### Slide 1:
- some reasons why you would want to build an R package
- we can take information from any of the resources listed below

### Slide 2:
- describe the tools we are going to use
- because it is continent we are using `RStudio` and `devtools`
- however, everything can also be accomplished using vanilla `R`

### Slide 3:
- let's check that the tools are installed
- we check very tool in turn and provide support for max. 10 minutes

### Slide 4:
- how to start building the package -> `devtools::create`
- generating the package skeleton
- explain the function arguments

### Slide 5:
- show an overview of the folder structure
- next, explain each folder and file in turn

### Slide 6:
- explain the `DESCRIPTION` file 
- explain the common-sense items:
    - name, version etc.
- explain interesting items:
    - license, data etc.
    - explain that for the license we may need an additional file (e.g., `COPYING`)
- explain harder items:
    - depends vs. imports vs. suggests
- explain impossible items:
    - collation order -> only explain what it is

### Slide 7:
- explain what the `man` folder stands for
- explain that within the `man` folder there are `.Rd` files that represent the documentation
    - every exported object should be document
- show example of how to document a function using `latex` syntax
- show example of how to document the package using `latex` syntax
- say that there is an easier way using `roxygen2`
- mention that we get back to `roxygen2` later

### Slide 8: 
- explain `NAMESPACE` file
- mention that in namespace we list the objects that we want the users and other packages to have access to
- mention that we don't need to touch this if we work with `roxygen2`, as `roxygen2` will take care of the exports automatically

### Slide 9:
- explain what the `R` folder contains
- mention that this is where the package code stays (i.e., `.R` files)
- indicate that it is common practice to have a `zzz.R` file for the package documentation (i.e., to be discussed later)

### Slide 10:
- explain what the `tests` folder contains
- explain how to generate the `tests` folder via `devtools::use_testthat()`
- mention that this is where the unit tests are stored
- explain briefly what a unit test is

### Slide 11:
- explain 'README.md' file
- mention that this is the first thing users see on the GitHub page

### Slide 12:
- explain 'NEWS' file
- mention that this file states the changes from a version to another (i.e., helpful for `CRAN` submissions)

### Slide 13:
- explain that `roxygen2` is used to generate the package documentation and `NAMESPACE`
- mention that `roxygen2` for exporting objects to the `NAMESPACE`
- show examples of how to use `roxygen2`:
    - for a function (i.e., also S3 methods)
    - for a package (i.e., the `zzz.R` file)
    - and, perhaps, for a data

### Slide 14: (optional)
- special functions when loading, attaching and unloading the package

### Slide 15:
- example of how to build the package with `devtools` 

### Slide 16:
- example of how to install the package with `devtools`

### Slide 17:
- alternative way to load all your package functions and test the with `devtools::load_all()`

### Slide 18:
- example of how to check the package before submitting it to `CRAN` using `devtools`

### Slide 19:
- let's get our hands dirty
- mention what what do write in our toy package

... -> slides with the step-by-step explanations (e.g., OLS or permutation or bootstrapping)

---

### Start writing the code.

--- 

### Resources:
- https://hilaryparker.com/2014/04/29/writing-an-r-package-from-scratch
- https://r-pkgs.org/index.html
- http://r-pkgs.had.co.nz/
- https://cran.r-project.org/doc/manuals/R-exts.html
- http://portal.stats.ox.ac.uk/userdata/ruth/APTS2012/Rcourse10.pdf
- https://cran.r-project.org/doc/contrib/Leisch-CreatingPackages.pdf