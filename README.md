## QC Logger
Please be advised that this project is a work in progress, so the <a target="_blank" href="https://qc-logger.netlify.app/">DEMO</a> may become disconnected from the API during feature updates!!


Record your QC laboratory results using QC Logger! This app was inspired by my prior experience as a laboratory professional, where I would routinely record QC test results on paper. Why not make it electronic?! This full-stack project is made with React and Supabase. Check out the <a target="_blank" href="https://qc-logger.netlify.app/">DEMO</a> on Netlify!
 <tr>
    <td width="100%"  style="align:center;" valign="top">
            <img src="https://github.com/ubemacapuno/images-for-github-readme/blob/main/qc-logger.jpg?raw=true" width="100%"  alt="QC Logger Demo"/>
    </td>
  </tr>

## How It's Made:

**Tech used:** 

React, Supabase, JavaScript/HTML/CSS

Using NPM:

```bash
# Install dependencies
$ npm install

# Start Application
$ npm start
```

## Things to add:
- Create a `.env` file in the root directory and add the following:
  - REACT_APP_SUPABASE_URL=[Enter Supabase URL Here]
  - REACT_APP_ANON_KEY=[Enter Supabase Key Here]

## Lessons Learned:
Better knowledge of React hooks, such as useEffect and useState. Better knowledge of using Supabase API calls to connect to the Supabase backend. Adding authentication via Supabase.

## Optimizations:
I would like to eventually build out RLS, and add an audit trail feature.
