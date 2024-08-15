// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

// Scroll behavior
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });

  // Sticky Navbar
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // Remove toggle icon and navbar active class on scroll
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
}

// Show skill chart
function webShowSkillChart() {
  var skillChart = document.getElementById('skillChart');
  skillChart.style.display = 'block';
}

// Scroll to blog section on button click
document.getElementById('scrollToBlogBtn').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('blog').scrollIntoView({ behavior: 'smooth' });
});

// Blog day content navigation
let currentDay = 0;

function showDayContent(day) {
  const dayContent = document.getElementById("day-content");

  // Sample data for day content
  const dayDetails = [
    { text: "" }, // Placeholder for default view
    //Day #1
    { text: "Today marked the beginning of my On-the-Job Training (OJT) at the Department of Public Works and Highways (DPWH), and it was an exciting start. We began the day with a warm welcome and introductions, which helped to ease some of the first-day nerves. This initial interaction made me feel comfortable and set a positive tone for the day. Our first task, tackled as a team, was to fix a system unit. This collaborative effort allowed us to bond and work together effectively right from the start. After successfully fixing the system unit, we moved on to reformatting a computer, a task that served as a good refresher on the basics of handling software issues. Successfully completing this task boosted my confidence and reassured me of my skills. Following that, we delved into hardware repairs, which presented a more challenging yet rewarding experience. I had the opportunity to fix an employee's broken Uninterruptible Power Supply (UPS) and replace the damaged power cable with a new Automatic Voltage Regulator (AVR) and power cable. This hands-on task was particularly enlightening, highlighting the critical role of maintaining a stable power supply for seamless operations. Later in the day, our focus shifted to organizing the stock room. Cleaning and arranging the space made it more spacious and efficient, which, although a small task, had a significant impact on our overall workspace. This effort underscored the importance of maintaining an organized environment to ensure smooth workflow and quick access to necessary tools and equipment. Reflecting on the day's activities, I realized how much I had already learned in just one day. The combination of software and hardware tasks provided a comprehensive introduction to the kind of work I can expect at DPWH. It was a busy and productive day, leaving me eager and excited for the upcoming days of my OJT. I am looking forward to the new skills I will acquire and the experiences I will gain throughout this journey.",
      images: ["img/day1_1.jpg", "img/day1_2.jpeg", "img/day1_3.jpeg", "img/day1_4.jpeg"] },
    //Day #2
    { text: "Today, our supervisor split us into two groups: the Prevention group with two members and the Wiring group with six members. I was placed in the Wiring group. The Prevention group’s task was to clean computers in various departments, focusing only on those that needed it, and assist employees with computer-related issues like installing printer drivers. Meanwhile, my team, the Wiring group, was responsible for arranging and organizing wires in each department. We made a solid start and completed about 10% of our task. However, there are many buildings left to check and organize. Being part of the Wiring group was a hands-on experience that taught me the importance of teamwork and efficient task allocation. Working alongside my teammates, I realized how crucial organized wiring is for both safety and functionality in a workplace. Tangled and messy wires not only pose safety hazards but also hinder the efficiency of the IT infrastructure. As we progressed, it was motivating to see the immediate impact of our efforts. The neat and organized wiring made a noticeable difference, enhancing the overall functionality of the departments we worked in. This experience has made me excited to continue improving the establishment's IT infrastructure, and I am looking forward to tackling the remaining buildings.", 
      images: ["img/day2_1.jpeg", "img/day2_2.jpg", "img/day2_3.jpg", "img/day2_4.jpg"] },
    //Day #3
    { text: "Today, the ICT department focused on a major cleanup operation in preparation for an inspection on July 30. Our primary task was to clean and organize the repair room, which turned out to be both productive and enjoyable. Despite the hard work, we had a lot of fun, joking around and bonding with our seniors and fellow interns. It felt like we had become close friends in just three days. The camaraderie made the task feel less like work and more like a team effort. By the end of the day, our repair room looked as good as new, with a new layout that created a more spacious and comfortable workspace. This experience taught me the value of maintaining a clean and organized work environment. A tidy space not only improves efficiency but also makes it easier to find tools and equipment when needed. It also reinforced the importance of good relationships with colleagues, which can make even the most challenging tasks enjoyable. Working alongside such supportive and friendly team members made the day fly by and turned a potentially tedious task into an opportunity for teamwork and bonding. I'm hopeful that this positive atmosphere will continue throughout the rest of my OJT, as it makes the learning process much more enjoyable and effective. This experience has shown me that a positive work environment can significantly enhance productivity and job satisfaction.", 
      images: ["img/day3_1.jpg", "img/day3_2.jpg", "img/day3_3.jpg", "img/day3_4.jpg"] },
    //Day #4
    { text: "Today was an exciting day as the regional Head of IT visited for server maintenance. We were given the rare opportunity to explore the server room and learn about server management and maintenance. This hands-on experience provided a deeper understanding of the IT infrastructure that supports our operations. Observing the meticulous work involved in maintaining server performance and security was eye-opening. It highlighted the critical role of IT in ensuring the smooth running of departmental activities.  The visit was both educational and inspiring, reinforcing the importance of continuous learning in the IT field. We got to see firsthand how servers are monitored, updated, and secured to prevent downtime and data breaches. The Head of IT explained various protocols and best practices, giving us valuable insights into the complexities of server management. This experience made me appreciate the behind-the-scenes efforts that keep our systems running smoothly. Moreover, the visit emphasized the necessity of being detail-oriented and proactive in maintaining IT infrastructure. It was a day filled with new knowledge and a sense of awe at the intricate world of IT management. Overall, this experience has inspired me to delve deeper into the field and continuously seek opportunities to expand my skills and understanding.", 
      images: ["img/day4_1.jpg", "img/day4_2.jpg", "img/day4_3.jpg", "img/day4_4.jpg"] },
    //Day #5
    { text: "We received a call from the supply office section today with a request to connect a computer to the internet via Ethernet cable. This task involved identifying the best network points, running the cables, and ensuring a stable connection. It required careful attention to detail to avoid connectivity issues, such as ensuring proper cable management and avoiding interference. The client's satisfaction with our quick and efficient service was rewarding, and it reinforced the value of providing dependable IT support. The task highlighted the importance of stable internet connectivity for productivity. A reliable internet connection is crucial for day-to-day operations, and ensuring this connectivity directly impacts the efficiency of the workplace. I learned the importance of precise planning and execution in network setups. This experience also taught me how crucial communication with the client is to understand their needs and deliver effective solutions. Additionally, it was a reminder of how essential our role is in maintaining the technological backbone of the department. The immediate impact of our work on the client's productivity was evident and satisfying. This task reinforced my understanding of the importance of timely and reliable IT support in any organization. It was another day that emphasized the significance of our contributions to the smooth functioning of the department.", 
      images: ["img/day5_1.jpg", "img/day5_2.jpg", "img/day5_3.jpg", "img/day5_4.jpg"] },
    //Day #6
    { text: "In the QAS section, we installed printer drivers and set up wireless connections for their computers. The goal was to simplify access to the printer by eliminating the need for wired connections. This task involved configuring network settings and ensuring seamless connectivity, which required careful attention to detail to avoid any disruptions. The staff appreciated the convenience of the wireless setup, as it significantly enhanced their workflow and reduced the clutter of cables. Through this task, I gained valuable insights into the benefits of wireless technology in improving workplace efficiency. The ability to print wirelessly streamlined processes and reduced the time spent managing physical connections. It was fulfilling to see how our work directly contributed to a smoother operation, as the new setup made it easier for the staff to perform their tasks without interruptions. Additionally, this experience highlighted how adapting to new technologies can drive operational efficiency. Observing the positive impact of the wireless setup reinforced the importance of staying current with technological advancements. It was a practical reminder of how embracing innovations can lead to more streamlined processes and improved productivity in the workplace.", 
      images: ["img/day6_1.jpg", "img/day6_2.jpg", "img/day6_3.jpg", "img/day6_4.jpg"] },
    //Day #7
    { text: "Today, we installed printer drivers in the construction section and addressed a PC with an open chassis error. While the printer installation was a straightforward process, the PC repair required detailed diagnostic work to identify and fix the issue. Troubleshooting the problem involved checking hardware connections, ensuring components were securely in place, and resolving any underlying issues that caused the error. After thorough investigation and resolution, we successfully restored the computer to working order. This task tested both our software and hardware skills, demanding a combination of technical expertise and persistence. I learned the value of problem-solving and the importance of a methodical approach in IT repairs. It was satisfying to see the computer functioning properly again, knowing that our efforts directly contributed to the team's productivity. Additionally, I appreciated the collaborative effort required to troubleshoot and resolve complex issues. Working with colleagues to find solutions underscored the significance of teamwork in overcoming technical challenges. This experience highlighted how essential technical expertise and a problem-solving mindset are in maintaining system reliability and supporting the smooth operation of the department.", 
      images: ["img/day7_1.jpg", "img/day7_2.jpg", "img/day7_3.jpg", "img/day7_4.jpg"] },
    //Day #8
    { text: "We spent the day setting up wiring in the construction and procurement sections. This task involved running new cables, securing them neatly, and ensuring that all connections were functioning properly. Proper wiring is crucial for maintaining a reliable network, and although the work was physically demanding, the results were highly rewarding. By the end of the day, we achieved a more organized and efficient setup, which significantly improved the functionality of the network. Through this experience, I learned the importance of thorough planning and careful execution in cabling projects. The meticulous approach we took ensured that the wiring was both efficient and reliable. This day reinforced the significance of a well-maintained IT infrastructure in supporting the overall operations of the department. Additionally, I recognized the long-term benefits of investing time in proper cabling. A well-organized wiring system can prevent future connectivity issues and reduce maintenance efforts. This experience highlighted how critical physical infrastructure is in supporting digital operations and ensuring smooth network performance. It was a productive day that emphasized the foundational role of physical setups in the broader IT ecosystem.", 
      images: ["img/day8_1.jpg", "img/day8_2.jpg", "img/day8_3.jpg", "img/day8_4.jpg"] },
    //Day #9
    { text: "Today's tasks involved changing the maintenance box of an Epson printer in the QAS section and cleaning and organizing IT supplies in the storage section. The printer maintenance was crucial for ensuring its smooth functionality and preventing potential issues. Meanwhile, organizing the stock room helped create a more efficient and clutter-free workspace. Balancing these tasks between maintenance and organization highlighted how both aspects are essential for operational efficiency. I realized that regular maintenance and systematic organization play a significant role in preventing issues and improving overall efficiency. Keeping equipment in good condition and maintaining an orderly workspace can significantly reduce downtime and extend the lifespan of IT resources. The day underscored the importance of proactive IT management and the benefits of a well-organized environment. Additionally, this experience taught me the value of a systematic approach to managing IT resources. Preventive maintenance not only keeps equipment running smoothly but also helps in avoiding unexpected failures. By investing time in these tasks, we ensure that the equipment remains reliable and efficient. Overall, it was a productive day that reinforced the importance of careful and proactive management in IT operations.", 
      images: ["img/day9_1.jpg", "img/day9_2.jpg", "img/day9_3.jpg", "img/day9_4.jpg"] },
    //Day #10
    { text: " We continued our work in the planning and design section, focusing on setting up wiring and refilling ink in an Epson printer in the QAS section. Proper wiring setup was crucial for maintaining network reliability, ensuring that all connections were secure and functioning correctly. Meanwhile, the ink refill was essential for keeping the printer operational and ready for use. Both tasks were integral to supporting the department's daily operations. Through these activities, I learned the importance of regular maintenance and meticulous setup in IT tasks. Attention to detail in both wiring and printer maintenance is key to ensuring smooth and efficient operations. It was a busy day, but it underscored how well-maintained equipment and a properly set up network can significantly enhance overall productivity. Moreover, this day reinforced the need for consistent upkeep of both digital and physical IT assets. Observing the immediate impact of our work on the department’s efficiency highlighted the value of ongoing maintenance and careful management. It was a valuable reminder of how crucial it is to balance technical precision with proactive maintenance to support effective IT operations.", 
      images: ["img/day10_1.jpg", "img/day10_2.jpg", "img/day10_3.jpg", "img/day10_4.jpg"] },
    //Day #11
    { text: "Today, we concentrated on fixing messy wires in the planning and design section as part of our preparation for the upcoming ISO audit. Proper wire management is essential not only for safety and operational efficiency but also for meeting the stringent standards required by the audit. The task involved meticulously sorting and securing cables to create a clean and organized workspace. The process was detailed and labor-intensive, but the end result was a significantly neater and more professional environment. This experience taught me the importance of presenting a well-organized space for audits. Ensuring that everything is in order is crucial for a successful audit outcome and demonstrates our commitment to maintaining high standards. Additionally, I realized how aesthetics play a role in professional settings. Well-organized wiring can positively influence an auditor's perception, reflecting our attention to detail and dedication to quality. This task highlighted the significance of thorough preparation for external evaluations and the impact it can have on the overall success of the audit. It was a valuable reminder of how preparation and presentation contribute to the effectiveness of IT management and compliance.", 
      images: ["img/day11_1.jpg", "img/day11_2.jpg", "img/day11_3.jpg", "img/day11_4.jpg"] },
    //Day #12
    { text: "We spent the day delivering disposal items, including old UPS units, printers, and system units, to the designated disposal area. This task was part of our efforts to declutter the office and remove outdated or non-functional equipment. Proper disposal of these items is crucial for maintaining a clean and efficient workspace and for ensuring that electronic waste is handled responsibly. Contributing to this process was satisfying, as it underscored the importance of proper disposal and recycling in IT. I learned how crucial it is to follow disposal regulations to ensure the safe and environmentally responsible handling of electronic waste. This day highlighted the environmental impact of IT operations and the need to manage electronic waste effectively. Additionally, I gained a deeper understanding of the broader implications of IT management on environmental responsibility. Ensuring that outdated equipment is disposed of correctly not only helps maintain an organized workspace but also contributes to sustainable practices. This experience reinforced the significance of adhering to disposal regulations and demonstrated how IT operations can align with environmental stewardship.", 
      images: ["img/day12_1.jpg", "img/day12_2.jpg", "img/day12_3.jpg", "img/day12_4.jpg"] },
    //Day #13
    { text: "Continuing our wire management efforts, we dedicated the day to fixing messy wires in the district engineer section. Proper cable management is crucial for ensuring both network stability and safety, as it helps prevent connectivity issues and potential hazards. The work required meticulous attention to detail, but the end result was a significantly more organized and efficient workspace. It was rewarding to see the tangible improvements in the organization of the cables. This experience reinforced the value of consistent effort in maintaining IT infrastructure. I learned that systematic cable management not only enhances workplace efficiency but also plays a critical role in preventing potential hazards and optimizing network performance. This day underscored the importance of maintaining a well-organized IT environment. A clean and well-managed setup contributes to a safer work environment and ensures that the network operates smoothly. Overall, it was a productive day that highlighted how careful and ongoing management of IT assets can lead to substantial benefits for both functionality and safety.", 
      images: ["img/day13_1.jpg", "img/day13_2.jpg", "img/day13_3.jpg", "img/day13_4.jpg"] },
    //Day #14
    { text: "Today, we focused on installing printer drivers in the district engineer section. Ensuring that all computers had access to the necessary printers is vital for maintaining productivity and streamlining workflows. While the installation process itself was straightforward, it required careful attention to detail to ensure that all settings were correctly configured and that each computer could connect to the printer without issues. I learned the importance of thoroughness in IT installations and how even small oversights can impact overall functionality. It was a productive day dedicated to supporting the team’s needs and ensuring their work processes were efficient. Additionally, this task highlighted the necessity of keeping software up-to-date to avoid compatibility issues and ensure smooth operation. It underscored the importance of regular updates and ongoing maintenance in IT systems to prevent future problems and maintain optimal performance. This experience reinforced how regular attention to software and system updates is crucial for sustaining an efficient and effective IT environment.", 
      images: ["img/day14_1.jpg", "img/day14_2.jpg", "img/day14_3.jpg", "img/day14_4.jpg"] },
    //Day #15
    { text: "In the finance section, we installed Epson printer drivers and took on the task of arranging IT supplies and cleaning the office. While setting up the printers was a routine job, organizing and tidying the workspace was crucial for maintaining an efficient environment. The office cleanup was part of our broader efforts to ensure that every workspace remained tidy and functional. Despite the busyness of the day, the immediate impact of our work was gratifying. Seeing the office transform into a more organized and pleasant space underscored the value of a well-maintained environment for productivity. I learned firsthand how a neat and orderly workspace can significantly enhance operational efficiency. Additionally, I observed that a clean and organized office not only improves workflow but can also boost employee morale. A professional and well-ordered environment fosters a positive atmosphere and supports overall workplace effectiveness. This experience highlighted the importance of maintaining a high standard of organization and cleanliness in the workplace, reinforcing how these elements contribute to a more productive and enjoyable work setting.", 
      images: ["img/day15_1.jpg", "img/day15_2.jpg", "img/day15_3.jpg", "img/day15_4.jpg"] },
    //Day #16
    { text: "Today, we tackled the issue of a malfunctioning telephone in the construction section. The task involved diagnosing the problem, which turned out to be a simple connection issue. Once we addressed the connection, the telephone was quickly restored to working order. This experience was a reminder of the diverse range of tasks we handle in IT and the crucial role of maintaining all aspects of the department's communication infrastructure. I learned the significance of thorough diagnostics in troubleshooting IT issues. It was a successful day that reinforced the value of comprehensive IT support in ensuring smooth operations. Moreover, resolving the issue promptly prevented extended downtime and helped improve communication efficiency within the department. This task highlighted the importance of reliable communication systems in the workplace. Efficient and functional communication tools are essential for maintaining productivity and ensuring that team members can collaborate effectively. The experience underscored how prompt issue resolution can make a significant difference in the overall efficiency and effectiveness of the work environment.", 
      images: ["img/day16_1.jpg", "img/day16_2.jpg", "img/day16_3.jpg", "img/day16_4.jpg"] },
    //Day #17
    { text: "Our tasks today involved a blend of activities we had tackled in previous days. We began by installing printer drivers across various sections, ensuring that every computer had access to the necessary printers. This step was crucial for maintaining productivity and preventing workflow interruptions. Once the printer installations were complete, we shifted our focus to organizing and securing wires in the planning and design section, mirroring the efforts we had made in other areas. This dual approach allowed us to address both software and hardware needs effectively, testing our multitasking abilities and highlighting the importance of versatility in IT roles. I learned how valuable it is to be adaptable and to seamlessly switch between different types of tasks. This experience underscored the necessity of having a broad skill set in both software installations and hardware management. Moreover, I appreciated the immediate positive impact of our efforts on overall productivity and workspace organization. Seeing the direct results of our work reinforced the importance of comprehensive IT support and the benefits of maintaining an organized and efficient IT environment.", 
      images: ["img/day17_1.jpg", "img/day17_2.jpg", "img/day17_3.jpg", "img/day17_4.jpg"] },
    //Day #18
    { text: "Today was another busy yet productive day as we combined tasks from our previous experiences. We began by performing maintenance on an Epson printer in the QAS section, which involved changing the maintenance box and refilling the ink. This ensured that the printer was running smoothly and ready for daily use. After completing the printer maintenance, we transitioned to organizing and setting up network wirings in the construction section, carefully securing all connections to ensure proper functionality. This combination of tasks highlighted the dual importance of managing both the software and physical aspects of IT equipment. I learned how regular maintenance can prevent potential issues and the significance of meticulous planning when setting up network infrastructure. The day underscored the importance of attention to detail in every IT task, whether it involves hardware upkeep or network organization. Furthermore, this experience taught me the value of preventative maintenance. By addressing issues before they become problems, we can ensure long-term system reliability and efficiency. This approach not only helps maintain smooth operations but also extends the lifespan of IT equipment, reinforcing the critical role of proactive management in IT support.", 
      images: ["img/day18_1.jpg", "img/day18_2.jpg", "img/day18_3.jpg", "img/day18_4.jpg"] },
    //Day #19
    { text: "We dedicated today to wire management and office organization, building on tasks from previous days. Our first focus was on tidying up the messy wires in the district engineer section, ensuring that the workspace was safe and efficient as we prepared for the upcoming ISO audit. Proper wire management is crucial for maintaining both safety and operational efficiency, and seeing the workspace improve with our efforts was highly rewarding. Following this, we shifted our attention to arranging IT supplies and cleaning the finance section office. This task was part of our ongoing commitment to maintaining a tidy and efficient workspace. The day underscored the value of keeping a well-organized environment, both for internal efficiency and for meeting external audit standards. I learned that a clean and organized workspace not only enhances operational efficiency but also has a positive impact on employee morale and productivity. Seeing how our efforts contributed to a more professional and orderly environment was fulfilling. This experience highlighted the importance of consistent organization and its benefits in creating a productive and pleasant workplace.", 
      images: ["img/day19_1.jpg", "img/day19_2.jpg", "img/day19_3.jpg", "img/day19_4.jpg"] },
    //Day #20
    { text: "Our final day at the ICT department was a poignant blend of emotions. The ICT staff generously gave us time to focus on our requirements and provided detailed evaluations of our performance. Their support was outstanding, offering invaluable feedback and guidance that will undoubtedly benefit our future careers. It was bittersweet to know that this was our last day with such an incredible team. The department had been a place of camaraderie and learning, where employees were not only kind but also frequently shared their knowledge and joked around, creating a welcoming atmosphere. Reflecting on the experience, I felt immense gratitude for the opportunity to work alongside such a dedicated and friendly team. The skills and insights gained here have been immensely beneficial and will serve us well as computer science students. The experience highlighted the importance of a positive and collaborative work environment, reinforcing how a supportive culture can significantly impact personal and professional growth. As we said our goodbyes, I realized that the lessons and memories from this OJT would stay with me for a long time. This final day emphasized the value of mentorship and the profound effect that a nurturing work culture can have on one’s development. The blend of technical growth and the enriching human experience made this OJT a memorable chapter in my professional journey.", 
      images: ["img/day20_1.jpg", "img/day20_2.jpg", "img/day20_3.jpg", "img/day20_4.jpg"] },
  ];

  let animationOutClass, animationInClass;
  if (day > currentDay) {
    animationOutClass = 'slide-out-left';
    animationInClass = 'slide-in-right';
  } else if (day < currentDay) {
    animationOutClass = 'slide-out-right';
    animationInClass = 'slide-in-left';
  } else {
    animationOutClass = 'show';
    animationInClass = 'show';
  }

  dayContent.classList.remove('show', 'slide-in-right', 'slide-out-left', 'slide-in-left', 'slide-out-right');
  dayContent.classList.add(animationOutClass);

  setTimeout(() => {
    if (day > 0 && day <= dayDetails.length - 1) {
      const { text, images } = dayDetails[day];
      dayContent.innerHTML = `
        <center>
        <img src="${images[0]}" alt="Day ${day} Image 1" class="rounded-image">
        <img src="${images[1]}" alt="Day ${day} Image 2" class="rounded-image">
        <img src="${images[2]}" alt="Day ${day} Image 3" class="rounded-image">
        <img src="${images[3]}" alt="Day ${day} Image 4" class="rounded-image">
        <p>Day # ${day}<br></p>
        </center>
        <p>${text}<br></p>
      `;

      const buttons = document.querySelectorAll(".day-buttons button");
      buttons.forEach((button, index) => {
        if (index + 1 === day) {
          button.classList.add("active");
        } else {
          button.classList.remove("active");
        }
      });

      currentDay = day;
    } else {
      dayContent.innerHTML = `
        <center>
          <p><br><br><br><br><br><br><br>Welcome to my OJT journey. Click on a day to see what I've been up to.
          During my time at the Department of Public Works and Highways, I've dived into tasks ranging from reformatting computers to fixing hardware issues, 
          and even organizing our workspace. Each day brings new challenges and learning experiences, and I'm excited to share them with you. 
          Whether it's repairing a UPS or ensuring stable power supply for smooth operations, every task has taught me something valuable. 
          I appreciate your interest in my journey, and I hope you find my experiences insightful and inspiring!<br><br></p>
        </center>
      `;
    }

    dayContent.classList.remove(animationOutClass);
    dayContent.classList.add(animationInClass);
  }, 500); // Match this duration with your CSS transition duration
}

function prevDay() {
  if (currentDay > 1) {
    showDayContent(currentDay - 1);
  }
}

function nextDay() {
  if (currentDay < 20) {
    showDayContent(currentDay + 1);
  }
}

// Set the default view to intro text
document.addEventListener("DOMContentLoaded", () => {
  showDayContent(0);
});

