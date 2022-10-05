import { faqitems } from '../../data/faqitems';

export default function handler(req, res){
    res.status(200).json(faqitems)
}