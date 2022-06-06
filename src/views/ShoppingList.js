import react from 'react';
import Header from '../components/Header'
import Items from '../components/Items'

function ShoppingList() {
  var shopping_list = [
    {
      "name": "Nappies" ,
      "link": "https://www.amazon.co.uk/Pampers-Protection-Approved-Foundation-144-Count/dp/B07P8YRP59/ref=sxin_14?asc_contentid=amzn1.osa.c6efbd92-a235-4c6a-bd36-6021aaa40f78.A1F83G8C2ARO7P.en_GB&asc_contenttype=article&ascsubtag=amzn1.osa.c6efbd92-a235-4c6a-bd36-6021aaa40f78.A1F83G8C2ARO7P.en_GB&content-id=amzn1.sym.85934275-1cbe-43bd-92f9-22dc29b047c6%3Aamzn1.sym.85934275-1cbe-43bd-92f9-22dc29b047c6&creativeASIN=B07P8YRP59&crid=29X2GRT54IZRX&cv_ct_cx=baby&cv_ct_id=amzn1.osa.c6efbd92-a235-4c6a-bd36-6021aaa40f78.A1F83G8C2ARO7P.en_GB&cv_ct_pg=search&cv_ct_we=asin&cv_ct_wn=osp-single-source-earns-comm&keywords=baby&linkCode=oas&pd_rd_i=B07P8YRP59&pd_rd_r=173d220f-69ef-4255-a914-95b7e3249170&pd_rd_w=VVCwP&pd_rd_wg=Pdizv&pf_rd_p=85934275-1cbe-43bd-92f9-22dc29b047c6&pf_rd_r=AFKZDJY5DWM1WE8FW4TT&qid=1654554285&sprefix=baby%2Caps%2C70&sr=1-1-61f4c597-7a45-4a97-bd75-c52903f8ee93&tag=mailosp-21"
    },
    {
      "name": "Baby Wipes" ,
      "link": "https://www.amazon.co.uk/WaterWipes-Sensitive-Newborn-Biodegradable-Unscented/dp/B08MXSBRSB/ref=sxin_14?asc_contentid=amzn1.osa.c6efbd92-a235-4c6a-bd36-6021aaa40f78.A1F83G8C2ARO7P.en_GB&asc_contenttype=article&ascsubtag=amzn1.osa.c6efbd92-a235-4c6a-bd36-6021aaa40f78.A1F83G8C2ARO7P.en_GB&content-id=amzn1.sym.85934275-1cbe-43bd-92f9-22dc29b047c6%3Aamzn1.sym.85934275-1cbe-43bd-92f9-22dc29b047c6&creativeASIN=B08MXSBRSB&crid=29X2GRT54IZRX&cv_ct_cx=baby&cv_ct_id=amzn1.osa.c6efbd92-a235-4c6a-bd36-6021aaa40f78.A1F83G8C2ARO7P.en_GB&cv_ct_pg=search&cv_ct_we=asin&cv_ct_wn=osp-single-source-earns-comm&keywords=baby&linkCode=oas&pd_rd_i=B08MXSBRSB&pd_rd_r=06d93802-dc41-4ff7-b52b-9103ed5e3a07&pd_rd_w=fmuMo&pd_rd_wg=q5p2U&pf_rd_p=85934275-1cbe-43bd-92f9-22dc29b047c6&pf_rd_r=CVWBSGGDTD8DKYKE2J8P&qid=1654554152&rdc=1&sprefix=baby%2Caps%2C70&sr=1-2-61f4c597-7a45-4a97-bd75-c52903f8ee93&tag=mailosp-21"
    },
    {
      "name": "Rattle Teether Set Baby Toy" ,
      "link": "https://www.amazon.co.uk/WISHTIME-Rattle-Teether-Newborn-Educational/dp/B082DXNDTW/ref=sr_1_12?crid=2K2SEA9PNYURS&keywords=baby+toys&qid=1654554341&sprefix=baby+toys%2Caps%2C76&sr=8-12"
    },
    {
      "name": "Moses Basket" ,
      "link": "https://www.amazon.co.uk/Kinder-Valley-Moses-Basket-Cream/dp/B008SA5VLC/ref=sr_1_7?crid=1RF0NY97DU6A5&keywords=baby+basket&qid=1654554401&sprefix=baby+basket%2Caps%2C84&sr=8-7"
    },
  ];
  return (
    <div>
      <Header header="Shopping list"/>
      <Items shopping_list={shopping_list}/>
    </div>
  )
}

export default ShoppingList;