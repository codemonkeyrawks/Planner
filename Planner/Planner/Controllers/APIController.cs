using Planner.Models;
using System;
using System.Linq;
using System.Web.Http;

namespace Planner.Controllers
{
    public class APIController : ApiController
    {

        public class selectListing
        {
            public Array selectList { get; set; }
        }

        public class dataListing
        {
            public Array dataList { get; set; }
        }

        // Route to API
        // Return: Hello World
        [HttpGet]
        [Route("api")]
        public string API()
        {
            return "Hello World!";
        }

        // Route to getTask
        // Return: Task
        [HttpGet]
        [Route("getTask")]
        public object getTask()
        {
            using (var db = new PlannerEntities())
            {
                return db.Tasks.Select(x => x.taskType).ToList();
            }
        }

        // Route to getClass
        // Return: Class Name
        [Route("getClass")]
        public object getClass()
        {
            using (var db = new PlannerEntities())
            {
                return db.Classes.Select(x => x.className).ToList();
            }
        }

        // Route to postAssignmentName
        // Save: Assignment Name
        [HttpPost]
        [Route("postAssignmentName")]
        public void postAssignmentName(int courseID, string title, DateTime time1, DateTime time2, object steps)
        {
            using (var db = new PlannerEntities())
            {
                var result = db.adminAssigns.Add(new adminAssign()
                {
                    courseID = courseID,
                    assignment = title,
                    startDate = time1,
                    endDate = time2
                });
                db.SaveChanges();

                // Steps Are //

           }
        }

        // Route to getAssignment
        // Get: Assignments
        [HttpGet]
        [Route("getAssignment")]
        public object getAssignment(string input)
        {

            using (var db = new PlannerEntities())
            {
                db.Configuration.ProxyCreationEnabled = false;
                var info = db.Classes.Where(x => x.className == input).FirstOrDefault();
                var info2 = db.adminAssigns.Where(x => x.courseID == info.courseID).ToList();

                return info2.Select(x => x.assignment);

            };
        }

        // Route to getSteps
        // Get: Steps
        [HttpGet]
        [Route("getSteps")]
        public object getSteps(string input)
        {

            using (var db = new PlannerEntities())
            {
                var info = db.Classes.Where(x => x.className == input).FirstOrDefault();
                var info2 = db.adminAssigns.Where(x => x.courseID == info.courseID);
                var id = info2.FirstOrDefault();
                var info3 = db.userAssigns.Where(x => x.assignmentID == id.assignmentID).FirstOrDefault();

                return info3.data;

            };
        }

    }
}
