import { Input } from '@/components/ui/input';

const Contact = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-6 ">
        <div>
          <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
            <h3 className="text-4xl text-emerald-600 font-bold">
              Want to work with me?
            </h3>
            <p className="text-white/60">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className="grid grid-cols-1 gap-6">
              <Input
                type="firstname"
                placeholder="Firstname"
              />
              <Input
                type="lastname"
                placeholder="Lastname"
              />
              <Input
                type="email"
                placeholder="Email"
              />
              <Input
                type="phone"
                placeholder="Phone number"
              />
            </div>
          </form>
        </div>
        <div>contact data</div>
      </div>
    </div>
  );
};

export default Contact;
