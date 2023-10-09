import { useEffect, useState } from "react";

import axios from 'axios'

export const useRequest = (url: string, data?: any, config?: any,prev?:any) => {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState<any>();
    const [error, setError] = useState<any>();
    
    var URL="http://localhost:8080"+url // when uploda need change 
    if (prev!=null){
      URL=prev+url;
    }
    // const URL="http://129.226.83.165:8080"+url 
    const request = async () => {
    console.log(URL)
    setLoading(true);
      try {
        // const result = await fetch(
        //     URL,
        //     {
        //       method: 'POST',
        //       body: JSON.stringify(data),
        //       mode: 'cors',
        //       headers: {'Accept': 'application/json,test/plain,*/*','ContentType': "application/json"},//,'Access-Control-Allow-Origin': "http://localhost:8080","Access-Control-Allow-Credentials":"true"}
        //     }
        //   )
        const result = await axios({
            url:URL,
            params: data,
            method: config.method,//'post',
            headers:{mode: 'cors',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':"*",
            'Access-Control-Allow-Methods':"DELETE, POST, GET, OPTIONS",
            "Access-Control-Allow-Headers":"Authorization, X-Requested-With"}
          });
          // header.Add("Access-Control-Allow-Origin", "*")
            // header.Add("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
            // header.Add("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With")
            
        // result.json
        if (result && result.status >= 200 && result.status <= 304) {
          setResult(result.data);
        } else {
          setError(new Error('get data error in useRequest'));
        }
      } catch (reason) {
        setError(reason);
      }
      setLoading(false);
    };
    
    useEffect(() => {
      console.log("config.ready",config.ready)
      if (!config || !config.manual || (config.manual && config.ready)) {
        if (config.ready==true){
          console.log("zhixingle")
        }
        request();
      }
      // request();
    }, [config?.refresh||config?.ready ]);
  
    return {
      loading,
      result,
      error,
    };
  };