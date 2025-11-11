// // backend/controllers/leadController.js
// import Lead from "../models/lead.js";
// import { sendLeadEmail, sendCustomerEmail } from "../utils/emailService.js";

// // ----------------- CREATE -----------------
// export const createLead = async (req, res, next) => {
//   try {
//     const { name, email, phone, message } = req.body;

//     const newLead = await Lead.create({ name, email, phone, message });

//     // ✅ Send email to admin with full details
//     await sendLeadEmail({
//       name,
//       email,
//       phone,
//       message,
//     });

//     // ✅ Send thank-you email to customer
//     if (email) {
//       await sendCustomerEmail({ name, email });
//     }

//     res.status(201).json({
//       success: true,
//       message: "Lead created successfully ✅",
//       data: newLead,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// // ----------------- GET ALL -----------------
// export const getLeads = async (req, res, next) => {
//   try {
//     const leads = await Lead.find().sort({ createdAt: -1 }).select("-__v");

//     res.status(200).json({
//       success: true,
//       count: leads.length,
//       data: leads,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// // ----------------- GET ONE -----------------
// export const getLeadById = async (req, res, next) => {
//   try {
//     const lead = await Lead.findById(req.params.id).select("-__v");
//     if (!lead) {
//       return res.status(404).json({
//         success: false,
//         message: "❌ Lead not found",
//       });
//     }
//     res.status(200).json({ success: true, data: lead });
//   } catch (error) {
//     next(error);
//   }
// };

// // ----------------- UPDATE -----------------
// export const updateLead = async (req, res, next) => {
//   try {
//     const lead = await Lead.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     }).select("-__v");

//     if (!lead) {
//       return res.status(404).json({
//         success: false,
//         message: "❌ Lead not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Lead updated successfully ✅",
//       data: lead,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// // ----------------- DELETE -----------------
// export const deleteLead = async (req, res, next) => {
//   try {
//     const lead = await Lead.findByIdAndDelete(req.params.id);
//     if (!lead) {
//       return res.status(404).json({
//         success: false,
//         message: "❌ Lead not found",
//       });
//     }
//     res.status(200).json({
//       success: true,
//       message: "Lead deleted successfully 🗑️",
//       data: {},
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// backend/controllers/leadController.js
import Lead from "../models/lead.js";
// import { sendLeadEmail, sendCustomerEmail } from "../utils/emailService.js";

// ----------------- CREATE -----------------
export const createLead = async (req, res, next) => {
  try {
    const { name, email, phone, message } = req.body;

    const newLead = await Lead.create({ name, email, phone, message });

    // ❌ Temporarily disable email sending due to Render free tier SMTP block
    // await sendLeadEmail({ name, email, phone, message });
    // if (email) {
    //   await sendCustomerEmail({ name, email });
    // }

    res.status(201).json({
      success: true,
      message: "Thanks! Your message has been received successfully ✅",
      data: newLead,
    });
  } catch (error) {
    next(error);
  }
};

// ----------------- GET ALL -----------------
export const getLeads = async (req, res, next) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 }).select("-__v");

    res.status(200).json({
      success: true,
      count: leads.length,
      data: leads,
    });
  } catch (error) {
    next(error);
  }
};

// ----------------- GET ONE -----------------
export const getLeadById = async (req, res, next) => {
  try {
    const lead = await Lead.findById(req.params.id).select("-__v");
    if (!lead) {
      return res.status(404).json({
        success: false,
        message: "❌ Lead not found",
      });
    }
    res.status(200).json({ success: true, data: lead });
  } catch (error) {
    next(error);
  }
};

// ----------------- UPDATE -----------------
export const updateLead = async (req, res, next) => {
  try {
    const lead = await Lead.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).select("-__v");

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: "❌ Lead not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Lead updated successfully ✅",
      data: lead,
    });
  } catch (error) {
    next(error);
  }
};

// ----------------- DELETE -----------------
export const deleteLead = async (req, res, next) => {
  try {
    const lead = await Lead.findByIdAndDelete(req.params.id);
    if (!lead) {
      return res.status(404).json({
        success: false,
        message: "❌ Lead not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Lead deleted successfully 🗑️",
      data: {},
    });
  } catch (error) {
    next(error);
  }
};
