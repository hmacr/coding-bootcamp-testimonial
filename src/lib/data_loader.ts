import testimonialsJson from '../assets/data/testimonials.json';

export class Testimonial {
  name!: string;
  role!: string;
  content!: string;
  pic!: string;
}

export function loadTestimonials(): Testimonial[] {
  return testimonialsJson.map(json => {
    const picUrl = new URL(json.pic_url, import.meta.url).href;
    const testimonial = new Testimonial();
    testimonial.name = json.name;
    testimonial.role = json.role;
    testimonial.content = json.content;
    testimonial.pic = picUrl;
    return testimonial;
  });
}
